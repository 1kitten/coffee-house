from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.reserve.schemas import ReserveSchema

app = FastAPI(
    title='coffee-shop'
)

origins = ["http://localhost:3000/"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post('/api/v1/table_reservation/', response_model=ReserveSchema)
def reserve_table(reserve_data: ReserveSchema) -> ReserveSchema:
    """ Endpoint to reserve table. """
    return reserve_data
