from .models import Carousel ,Trainer ,StudentSection ,Student ,StudentPayment
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

class StudentPaymentSerializers(serializers.ModelSerializer):
    class Meta:
        model = StudentPayment
        fields = '__all__'