from django.shortcuts import render


def index(request):
    ctx = {
        "site_name": "quintindev"
    }
    return render(request=request, context=ctx, template_name="blog/index.html")