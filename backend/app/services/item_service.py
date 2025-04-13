from app import db
from app.models.item import Item

def get_all_items():
    items = Item.query.all()
    return [item.serialize() for item in items]

def get_item_by_id(item_id):
    return Item.query.get(item_id)

def create_item(data):
    new_item = Item(**data)
    db.session.add(new_item)
    db.session.commit()
    return new_item

def update_item(item_id, data):
    item = Item.query.get(item_id)
    if not item:
        return None
    for key, value in data.items():
        setattr(item, key, value)
    db.session.commit()
    return item

def delete_item(item_id):
    item = Item.query.get(item_id)
    if not item:
        return None
    db.session.delete(item)
    db.session.commit()
    return item
