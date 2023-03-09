from django.contrib import admin
from .models import *

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ("name", "section","gender","admission_date")
    list_filter = ("admission_date","section")
    search_fields = ("name__startswith","student_id__startswith")

@admin.register(Trainer)
class TrainerAdmin(admin.ModelAdmin):
    list_display = ("name","designation","gender","enrollment_date")
    list_filter = ("enrollment_date","designation")
    search_fields = ("name__startswith","designation__startswith")

@admin.register(StudentPayment)
class StudentPaymentAdmin(admin.ModelAdmin):
    list_display = ("student","payment_month","payment_fee","payment_date")
    list_filter = ("payment_month","payment_date")
    search_fields = ('payment_month','student__name')

@admin.register(StudentSection)
class StudentSectionAdmin(admin.ModelAdmin):
    list_display = ("section",)

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ("title","price","trainer")
    list_filter = ("price","trainer")
    search_fields = ('title',)

@admin.register(CourseRating)
class CourseRatingAdmin(admin.ModelAdmin):
    list_display = ("user","course","rating")
    list_filter = ("rating",)
    search_fields = ('course__title',)

@admin.register(ArtProduct)
class ArtProductAdmin(admin.ModelAdmin):
    list_display = ("title","price","creator_name")
    list_filter = ("price","creator_name")
    search_fields = ('title',)

@admin.register(ArtProductRating)
class ArtProductRatingAdmin(admin.ModelAdmin):
    list_display = ("user","artproduct","rating")
    list_filter = ("rating",)
    search_fields = ('artproduct__title',)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("user","subject","message")
    search_fields = ('user__name',)

@admin.register(Carousel)
class CarouselAdmin(admin.ModelAdmin):
    list_display = ("title",)
    search_fields = ('title',)

@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = ("user","title")
    list_filter = ("user",)
    search_fields = ('title',)

admin.site.site_header = "SEROV ACADEMY OF FINE ARTS"
admin.site.site_title = "SEROV ACADEMY"
admin.site.index_title = "SEROV ACADEMY DATATBSE"