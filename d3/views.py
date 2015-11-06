from django.shortcuts import render

# Create your views here.
def index(request):
    template = "".join(["d3/", request.GET.get("name", "index"), ".html"])

    params = {
        'examples': [
            {
                'name': 'three_little_circles',
                'display_text': 'Three Little Circles'
            }
        ]
    }
    return render(request, template, params)
