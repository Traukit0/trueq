from flask import Blueprint, request, jsonify
from app.services.item_service import (
    get_all_items, get_item_by_id, create_item, update_item, delete_item
)

item_bp = Blueprint('items', __name__)

@item_bp.route("/", methods=["GET"])
def list_items():
    return jsonify(get_all_items()), 200

@item_bp.route("/<int:item_id>", methods=["GET"])
def get_item(item_id):
    item = get_item_by_id(item_id)
    if not item:
        return jsonify({"error": "Item no encontrado"}), 404
    return jsonify(item.serialize()), 200

@item_bp.route("/", methods=["POST"])
def create():
    data = request.get_json()
    item = create_item(data)
    return jsonify(item.serialize()), 201

@item_bp.route("/<int:item_id>", methods=["PUT"])
def update(item_id):
    data = request.get_json()
    item = update_item(item_id, data)
    if not item:
        return jsonify({"error": "Item no encontrado"}), 404
    return jsonify(item.serialize()), 200

@item_bp.route("/<int:item_id>", methods=["DELETE"])
def delete(item_id):
    item = delete_item(item_id)
    if not item:
        return jsonify({"error": "Item no encontrado"}), 404
    return jsonify({"message": "Item eliminado"}), 200
