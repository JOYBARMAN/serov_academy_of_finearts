from django.urls import path
from .views import CarouselList,CarouselDetail,TrainerList,TrainerDetail,StudentSectionList,StudentSectionDetail,StudentList,StudentDetail,StudentPaymentList,StudentPaymentDetail

urlpatterns = [
    path('carousel/',CarouselList.as_view()),
    path('carousel/<int:pk>/',CarouselDetail.as_view()),
    path('trainer/',TrainerList.as_view()),
    path('trainer/<int:pk>/',TrainerDetail.as_view()),
    path('section/',StudentSectionList.as_view()),
    path('section/<int:pk>/',StudentSectionDetail.as_view()),
    path('student/',StudentList.as_view()),
    path('student/<int:pk>/',StudentDetail.as_view()),
    path('student_payment/',StudentPaymentList.as_view()),
    path('student_payment/<int:pk>/',StudentPaymentDetail.as_view()),
]
