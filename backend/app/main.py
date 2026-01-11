from fastapi import FastAPI
from database import engine
from routers.stalls import router as stalls_router
from routers.menus import router as menus_router
app = FastAPI()

###############################
### Remember This Forever ###
# Schemas validate data
# Models talk to database 
###############################
app.include_router(
    stalls_router,
    prefix="/stalls",
    tags=["Stalls"]
)

app.include_router(
    menus_router,
    prefix="/menu",
    tags=["Menu"]
)

app.include_router(
    menus_router,
    prefix="/orders",
    tags=["Orders"]
)


@app.get('/health')
def health_check():
    try:
        with engine.connect() as connection:
            return {
                'status': 'DB Connected'
            }
    except Exception as e:
        return {
            'status': 'Db connection error', 'error':str(e)
        }
