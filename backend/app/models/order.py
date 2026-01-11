from database import Base
from sqlalchemy import Column, Integer, String, DateTime, Time, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
import uuid

class Orders(Base):
    __tablename__: 'orders'
    
    id=Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    table_number = Column(Integer, nullable=False)
    stall_id = Column(UUID(as_uuid=True), ForeignKey("stalls.id"), nullable=False, index=True)
    