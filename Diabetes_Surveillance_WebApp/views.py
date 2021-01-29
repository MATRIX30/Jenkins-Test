from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request): # all functions in django takes as arguements the request object
	
	context={
		
	}
	return render(request,'Diabetes_Surveillance_WebApp/index.html',context)