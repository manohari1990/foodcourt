from pydantic import BaseModel, ConfigDict
from sqlalchemy.dialects.postgresql import UUID
from typing import Optional, List
from decimal import Decimal
from datetime import datetime
from schema.common import PaginationMeta
from constants import PaymentStatus, OrderStatus

class OrderBase(BaseModel):
    
    table_number: int
    stall_id: UUID
    order_status: OrderStatus
    payment_status: PaymentStatus
    estimated_time: Optional[int] = None

class OrderCreate(OrderBase):
    pass

class OrderUpdate(BaseModel):
    
    table_number: Optional[int] = None
    stall_id: Optional[UUID] = None
    order_status: Optional[OrderStatus] = None
    payment_status: Optional[PaymentStatus] = None
    total_payment: Optional[Decimal] = None
    estimated_time: Optional[int] = None
    
class OrderResponse(OrderBase):
    id: UUID
    created_at: datetime
    updated_at: Optional[datetime]
        
    model_config=ConfigDict(from_attributes=True)

class ListOrderResponse(BaseModel):
    status_code: int
    message: str
    data: List[OrderResponse]
    pagination: PaginationMeta

class UpsertOrderResponse(BaseModel):
    status_code: int
    message: str
    data: OrderResponse
    