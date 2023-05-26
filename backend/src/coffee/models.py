from sqlalchemy import (
    String, DECIMAL, Column, Integer, ForeignKey
)
from sqlalchemy.orm import relationship

from src.database import Base, engine


class Item(Base):
    """
        Items table.
    """

    __tablename__ = 'item'

    id = Column(
        Integer, primary_key=True, nullable=False, autoincrement=True
    )
    title = Column(String, nullable=False)
    img = Column(String, nullable=True)
    scene = Column(String, nullable=False)
    price = Column(DECIMAL(precision=2), nullable=False)
    category_id = Column(Integer, ForeignKey('category.id'), nullable=False)


class Category(Base):
    """
        Categories table.
    """

    __tablename__ = 'category'

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    title = Column(String, nullable=False)

    items = relationship('Item', backref='category', cascade='delete', lazy='joined')
