from database import Base
from sqlalchemy import Column, ForeignKey, Integer, VARCHAR, DECIMAL
from sqlalchemy.orm import relationship


class Coffee(Base):
    """ Coffee model. """
    __tablename__ = "coffee"

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    title = Column(VARCHAR(50), nullable=False)
    description = Column(VARCHAR(255), nullable=True)
    price = Column(DECIMAL(precision=6, scale=2), nullable=False)
    category_id = Column(Integer, ForeignKey('category.id'))
    icon = ...  # TODO: Make a valid Image field.


class Category(Base):
    """ Category model. """
    __tablename__ = "category"

    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    title = Column(VARCHAR(35), nullable=False, index=True)
    icon = ...  # TODO: Make a valid Image field.

    coffee = relationship('Coffee', backref='category')
