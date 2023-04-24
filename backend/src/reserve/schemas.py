from datetime import date, time
from enum import IntEnum
from pydantic import BaseModel, EmailStr


class GuestsAmount(IntEnum):
    """ Enum for amount of allowed guests per person. """

    ONE = 1
    TWO = 2
    THREE = 3
    FOUR = 4


class ReserveSchema(BaseModel):
    """ Schema for table reservation. """

    date: date
    time: time
    guests: GuestsAmount
    email: EmailStr
    phone_number: str
    first_name: str
