from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def RenderSomething(req):
    return render(req, 'index.html')
def aboutPage(req):
    return HttpResponse("this is my abt page")
