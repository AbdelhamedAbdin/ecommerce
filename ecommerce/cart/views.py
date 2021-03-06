from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST, require_http_methods
from shop.models import Product
from .cart import Cart
from .forms import CartAddProductForm


# @require_http_methods(["POST"])
@require_POST
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id) # get object from request
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(
            product=product,
            quantity=cd['quantity'],
            update_quantity=cd['update']
        )
    return redirect("cart:cart_detail")


def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Product, id=product_id)
    cart.remove(product)
    return redirect("cart:cart_detail")


def cart_detail(request):
    cart = Cart(request) # is sessions
    for item in cart:
        item['update_quantitiy_form'] = CartAddProductForm(initial={"quantity": item['quantity']})
    context = {
        "cart": cart
    }
    return render(request, "cart/detail.html", context)
