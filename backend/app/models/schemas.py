from decimal import Decimal
from typing import Optional

from pydantic import BaseModel


class Image(BaseModel):
    """ Image validation scheme. """
    url: str
    name: str


class Category(BaseModel):
    """ Category validation scheme. """
    title: str
    icon: Optional[Image]


class Coffee(BaseModel):
    """ Coffee validation scheme. """
    title: str
    description: str
    category: Category
    price: Decimal
    icon: Optional[Image]
