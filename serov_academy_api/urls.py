from django.urls import path
from .views import CarouselList,CarouselDetail,TrainerList,TrainerDetail,StudentSectionList,StudentSectionDetail,StudentList,StudentSearch,StudentDetail,StudentPaymentList,StudentPaymentDetail,CourseList,CourseDetail,CourseRatingList,CourseRatingDetail,ArtProductList,ArtProductDetail,ArtProductRatingList,ArtProductRatingDetail,BlogList,BlogDetail,ContactList,ContactDetail

urlpatterns = [
    path('carousel/',CarouselList.as_view()),
    path('carousel/<int:pk>/',CarouselDetail.as_view()),
    path('trainer/',TrainerList.as_view()),
    path('trainer/<int:pk>/',TrainerDetail.as_view()),
    path('section/',StudentSectionList.as_view()),
    path('section/<int:pk>/',StudentSectionDetail.as_view()),
    path('student/',StudentList.as_view()),
    path('student/search/',StudentSearch.as_view()),
    path('student/<int:pk>/',StudentDetail.as_view()),
    path('student_payment/',StudentPaymentList.as_view()),
    path('student_payment/<int:pk>/',StudentPaymentDetail.as_view()),
    path('course/',CourseList.as_view()),
    path('course/<int:pk>/',CourseDetail.as_view()),
    path('course_rating/',CourseRatingList.as_view()),
    path('course_rating/<int:pk>/',CourseRatingDetail.as_view()),
    path('product/',ArtProductList.as_view()),
    path('product/<int:pk>/',ArtProductDetail.as_view()),
    path('product_rating/',ArtProductRatingList.as_view()),
    path('product_rating/<int:pk>/',ArtProductRatingDetail.as_view()),
    path('blog/',BlogList.as_view()),
    path('blog/<int:pk>/',BlogDetail.as_view()),
    path('contact/',ContactList.as_view()),
    path('contact/<int:pk>/',ContactDetail.as_view()),
]
