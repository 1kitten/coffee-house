from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL: str = "postgres+psycopg2://admin:admin@postgres/localhost:5432"

engine = create_engine(DATABASE_URL)
Base = declarative_base()

Session = sessionmaker(bind=engine)
session = Session()
