from fastapi import APIRouter, Depends
from database import get_db
from sqlalchemy.orm import Session


router = APIRouter()

@router.get('/')
def list_orders(
    db:Session = Depends(get_db)
):
    return ""