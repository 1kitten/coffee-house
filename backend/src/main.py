from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import session


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


@app.get('/api/v1/items/{category}')
def get_item_by_category(category: str):
    ...
