from sqlalchemy import (
    Column,
    Integer,
    VARCHAR,
    DECIMAL,
    Boolean
)

from src.database import Base


class Coffee(Base):
    """ Coffee model. """
    __tablename__ = "coffee"

    id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(VARCHAR(50), index=True, nullable=False)
    description = Column(VARCHAR(300), default='', nullable=True)
    price = Column(DECIMAL(precision=5, scale=3), nullable=False)
    is_active = Column(Boolean, default=True)
