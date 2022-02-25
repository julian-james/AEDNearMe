from django.urls import path

from .views import  MyTokenObtainPairView, BlacklistRefreshView, UserRegistrationView, get_by_username

from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/', UserRegistrationView.as_view()),
    path("get_by_username/<str:username>/", get_by_username, name="get_by_username"),
    path('login', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout', BlacklistRefreshView.as_view(), name="logout"),
]