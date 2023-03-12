from .serializers import CarouselSerializers ,TrainerSerializers, StudentSectionSerializers,StudentSerializers,StudentPaymentSerializers
from .models import Carousel,Trainer,StudentSection,Student,StudentPayment
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from account_api.renderers import UserRenderers
from rest_framework.permissions import IsAuthenticated

# Api view for carousel start

class CarouselList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        carousel = Carousel.objects.all()
        serializer = CarouselSerializers(carousel, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CarouselSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CarouselDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Carousel.objects.get(pk=pk)
        except Carousel.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        carousel = self.get_object(pk)
        serializer = CarouselSerializers(carousel)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        carousel = self.get_object(pk)
        serializer = CarouselSerializers(carousel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        carousel = self.get_object(pk)
        carousel.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for carousel end

# Api view for trainer start

class TrainerList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        trainer = Trainer.objects.all()
        serializer = TrainerSerializers(trainer, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = TrainerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TrainerDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Trainer.objects.get(pk=pk)
        except Trainer.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        trainer = self.get_object(pk)
        serializer = TrainerSerializers(trainer)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        trainer = self.get_object(pk)
        serializer = TrainerSerializers(trainer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        trainer = self.get_object(pk)
        trainer.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for trainer end

# Api view for student section start

class StudentSectionList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        stu_section = StudentSection.objects.all()
        serializer = StudentSectionSerializers(stu_section, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = StudentSectionSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentSectionDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return StudentSection.objects.get(pk=pk)
        except StudentSection.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        stu_section = self.get_object(pk)
        serializer = StudentSectionSerializers(stu_section)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        stu_section = self.get_object(pk)
        serializer = StudentSectionSerializers(stu_section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        stu_section = self.get_object(pk)
        stu_section.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for student section end

# Api view for student start

class StudentList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        student = Student.objects.all()
        serializer = StudentSerializers(student, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = StudentSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        student = self.get_object(pk)
        serializer = StudentSerializers(student)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        student = self.get_object(pk)
        serializer = StudentSerializers(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        student = self.get_object(pk)
        student.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for student end


# Api view for student payment start

class StudentPaymentList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        student_payment = StudentPayment.objects.all()
        serializer = StudentPaymentSerializers(student_payment, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = StudentPaymentSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentPaymentDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return StudentPayment.objects.get(pk=pk)
        except StudentPayment.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        student_payment = self.get_object(pk)
        serializer = StudentPaymentSerializers(student_payment)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        student_payment = self.get_object(pk)
        serializer = StudentPaymentSerializers(student_payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        student_payment = self.get_object(pk)
        student_payment.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for student payment end