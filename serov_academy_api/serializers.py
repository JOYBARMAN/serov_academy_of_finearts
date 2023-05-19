from .models import Carousel ,Trainer ,StudentSection ,Student ,StudentPayment ,Course ,CourseRating ,ArtProduct ,ArtProductRating ,Blog ,Contact
from rest_framework import serializers 


class CarouselSerializers(serializers.ModelSerializer):
    class Meta:
        model = Carousel
        fields = '__all__'

class TrainerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class StudentSectionSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentSection
        fields = '__all__'

class StudentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'
        depth = 1

class StudentPostSerializers(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class StudentPaymentSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentPayment
        fields = '__all__'
        depth = 1

class StudentPaymentPostSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentPayment
        fields = '__all__'

class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CourseRatingSerializers(serializers.ModelSerializer):
    class Meta:
        model = CourseRating
        fields = '__all__'

class ArtProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = ArtProduct
        fields = '__all__'

class ArtProductRatingSerializers(serializers.ModelSerializer):
    class Meta:
        model = ArtProductRating
        fields = '__all__'

class BlogSerializers(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'