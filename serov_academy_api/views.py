from .serializers import *
from .models import *
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

# Api view for course start

class CourseList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        course = Course.objects.all()
        serializer = CourseSerializers(course, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CourseSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Course.objects.get(pk=pk)
        except Course.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializers(course)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializers(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        course = self.get_object(pk)
        course.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for course end


# Api view for course rating start

class CourseRatingList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        course_rating = CourseRating.objects.all()
        serializer = CourseRatingSerializers(course_rating, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CourseRatingSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CourseRatingDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return CourseRating.objects.get(pk=pk)
        except CourseRating.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        course_rating = CourseRating.objects.filter(course=pk)
        serializer = CourseRatingSerializers(course_rating,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        course_rating = self.get_object(pk)
        serializer = CourseRatingSerializers(course_rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        course_rating = self.get_object(pk)
        course_rating.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for course rating end


# Api view for art product start

class ArtProductList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        art_product = ArtProduct.objects.all()
        serializer = ArtProductSerializers(art_product, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ArtProductSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArtProductDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return ArtProduct.objects.get(pk=pk)
        except ArtProduct.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        art_product = self.get_object(pk)
        serializer = ArtProductSerializers(art_product)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        art_product = self.get_object(pk)
        serializer = ArtProductSerializers(art_product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        art_product = self.get_object(pk)
        art_product.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for art product end


# Api view for art product rating start

class ArtProductRatingList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        art_rating = ArtProductRating.objects.all()
        serializer = ArtProductRatingSerializers(art_rating, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ArtProductRatingSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ArtProductRatingDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return ArtProductRating.objects.get(pk=pk)
        except ArtProductRating.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        product_rating = ArtProductRating.objects.filter(artproduct=pk)
        serializer = ArtProductRatingSerializers(product_rating,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        art_rating = self.get_object(pk)
        serializer = ArtProductRatingSerializers(art_rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        art_rating = self.get_object(pk)
        art_rating.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for art product rating end


# Api view for blog start

class BlogList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        blog = Blog.objects.all()
        serializer = BlogSerializers(blog, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = BlogSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class BlogDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Blog.objects.get(pk=pk)
        except Blog.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        blog = self.get_object(pk)
        serializer = BlogSerializers(blog)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        blog = self.get_object(pk)
        serializer = BlogSerializers(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        blog = self.get_object(pk)
        blog.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for blog end


# Api view for contact start

class ContactList(APIView):
    renderer_classes = [UserRenderers]
    def get(self, request, format=None):
        contact = Contact.objects.all()
        serializer = ContactSerializers(contact, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ContactSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Post Successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ContactDetail(APIView):
    renderer_classes = [UserRenderers]
    def get_object(self, pk):
        try:
            return Contact.objects.get(pk=pk)
        except Contact.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializers(contact)
        return Response(serializer.data,status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializers(contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"msg":"Data Successfully Updated"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        contact = self.get_object(pk)
        contact.delete()
        return Response({"msg":"Data Successfully Deleted"},status=status.HTTP_204_NO_CONTENT)
    
# Api view for contact end