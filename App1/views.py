from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout

# Create your views here.


def index(request):
    return render(request, 'landingpage.html')

def Signup(request):
    if request.method=='POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if password1!=password2:
            return HttpResponse("Pass not same")
        else:
            myuser = User.objects.create_user(username,email,password1) 
            myuser.save()
            return redirect("login.html")
    
    return render(request, 'signup.html')

def Login(request):
    if request.method=='POST':
        username = request.POST.get('username')
        pass1 = request.POST.get('pass')
        user = authenticate(request,username=username,password=pass1)
        if user is not None:
            login(request,user)
            return redirect('home')
        else:
            return HttpResponse("Username or Password incorrect")

    return render(request, 'login.html')

def Logout(request):
    logout(request)
    return redirect('login')



def virtual(request):
    return render(request, 'virtualcampus.html')

def about(request):
    return render(request, 'about.html')
def prospectus(request):
    return render(request,"prospectus.html")
def ranking(request):
    return render(request,"ranking.html")
def facts(request):
    return render(request,"facts.html")
def visitorsinfo(request):
    return render(request,"visitorsinfo.html")
def cuivirtual(request):
    return render(request,"cuivirtual.html")

def services(request):
    return HttpResponse("this is services page")
