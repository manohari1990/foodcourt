from enum import Enum

class PaymentStatus(str,Enum):
    pending = 'PENDING'
    success = 'SUCCESS'
    failed = 'FAILED'
    
class OrderStatus(str, Enum):
    placed = 'PLACED'
    preparing= 'PREPARING',
    ready = "READY"
    completed = "COMPLETED"
    cancelled = "CANCELLED"