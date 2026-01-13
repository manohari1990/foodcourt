from fastapi import APIRouter, Depends, Query, HTTPException
from database import get_db
from sqlalchemy.orm import Session
from uuid import UUID
from models.order import Order
from http import HTTPStatus
from schema.order import OrderCreate, UpsertOrderResponse, OrderUpdate, OrderResponse

router = APIRouter()

@router.get('/')
def list_orders(
    limit:int = Query(10, ge=1, le=100),
    offset:int = Query(0, ge=0),
    db:Session = Depends(get_db)
):
    
    base_query = (
        db.query(Order)
        .order_by(Order.updated_at)
        .limit(limit)
        .offset(offset)
        )
    
    list_query = base_query.all()
    total = base_query.count()
    
    return {
        "status_code": HTTPStatus.OK,
        "message": "List successfully!",
        "data": list_query,
        "pagination":{
            "total": total,
            "limit": limit,
            "offset": offset
        }
    }


@router.get('/{id}')
def get_order_by_id(
    id: UUID,
    db:Session = Depends(get_db)
) -> UpsertOrderResponse:
    existed_order = db.query(Order).filter(Order.id == id).first()
    if not existed_order:
        raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Order could not be found!")
    
    return UpsertOrderResponse(
        status_code=HTTPStatus.OK,
        message="Order found!",
        data=existed_order
    )

@router.post("/create")
def create_order(
    order: OrderCreate,
    db:Session = Depends(get_db)
) -> UpsertOrderResponse:
    
    new_order = Order(**order.model_dump())
    
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    
    return UpsertOrderResponse(
        status_code=HTTPStatus.OK,
        message="Order created successfully!",
        data=new_order
    )
    
    
@router.put('/update')
def update_order(
    id: UUID,
    update_order: OrderUpdate,
    db:Session = Depends(get_db)
) ->UpsertOrderResponse | dict:
    
    existed_order = db.query(Order).filter(Order.id == id).first()
    
    if not existed_order:
        raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Order could not be found!")
    
    updated_order = update_order.model_dump(exclude_unset=True)
    for field, value in updated_order.items():
        setattr(existed_order, field, value)
        
    db.commit()
    db.refresh(existed_order)
    
    return UpsertOrderResponse(
        status_code=200,
        message="Order updated Successfully",
        data= existed_order
    )
    
@router.delete("/{id}")
def delete_order(
    id: UUID,
    db:Session = Depends(get_db)
):
    
    exited_order = db.query(Order).filter(Order.id == id).first()
    
    if not exited_order:
        raise HTTPException(status_code=HTTPStatus.NOT_FOUND, detail="Order could not be found!")
    
    db.delete(exited_order)
    db.commit()
    return {
        "status_code": HTTPStatus.OK,
        "message": "Order deleted successfully!"
    }