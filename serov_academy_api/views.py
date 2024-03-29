from .serializers import *
from .models import *
from account_api.models import User
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework import status
from account_api.renderers import UserRenderers
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.parsers import MultiPartParser, FormParser
from .pagination import MyPagination
from django.db.models import Q
from rest_framework import filters


# Api view for carousel start


class CarouselList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        carousel = Carousel.objects.all()
        serializer = CarouselSerializers(carousel, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CarouselSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        carousel = self.get_object(pk)
        serializer = CarouselSerializers(carousel, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        carousel = self.get_object(pk)
        carousel.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for carousel end

# Api view for trainer start


class TrainerList(APIView):
    parser_classes = (MultiPartParser, FormParser)
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request, format=None):
        trainer = Trainer.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(trainer, request)
        serializer = TrainerSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = TrainerSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TrainerSearch(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        search_query = request.query_params.get("search", "")
        students = Trainer.objects.filter(name__icontains=search_query)
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(students, request)
        serializer = TrainerSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        trainer = self.get_object(pk)
        serializer = TrainerSerializers(trainer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        trainer = self.get_object(pk)
        trainer.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for trainer end

# Api view for student section start


class StudentSectionList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        stu_section = StudentSection.objects.all()
        serializer = StudentSectionSerializers(stu_section, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = StudentSectionSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        stu_section = self.get_object(pk)
        serializer = StudentSectionSerializers(stu_section, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        stu_section = self.get_object(pk)
        stu_section.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for student section end

# Api view for student start


class StudentList(APIView):
    parser_classes = (MultiPartParser, FormParser)
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request, format=None):
        student = Student.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(student, request)
        serializer = StudentSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        serializer = StudentPostSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentSearch(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        search_query = request.query_params.get("search", "")
        students = Student.objects.filter(name__icontains=search_query)
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(students, request)
        serializer = StudentSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


class StudentFilterBySection(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        section = request.GET.get("section")
        if section is not None:
            students = Student.objects.filter(section=section)
            paginator = self.pagination_class()
            result_page = paginator.paginate_queryset(students, request)
            serializer = StudentSerializers(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            return Response(
                {"error": "Please provide section parameter in the URL"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class StudentDetail(APIView):
    parser_classes = (MultiPartParser, FormParser)
    renderer_classes = [UserRenderers]

    def get_object(self, pk):
        try:
            return Student.objects.get(pk=pk)
        except Student.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        student = self.get_object(pk)
        serializer = StudentSerializers(student)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        student = self.get_object(pk)
        serializer = StudentPostSerializers(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        student = self.get_object(pk)
        student.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for student end


# Api view for student payment start


class StudentPaymentList(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request, format=None):
        student_payment = StudentPayment.objects.all()
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(student_payment, request)
        serializer = StudentPaymentSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)

    def post(self, request, format=None):
        student_id = request.data.get("student_id")
        section_id = request.data.get("section_id")
        payment_month = request.data.get("payment_month")
        payment_year = request.data.get("payment_year")
        payment_fee = request.data.get("payment_fee")
        payment_date = request.data.get("payment_date")

        # Fetch the student based on student_id and section_id
        try:
            student = Student.objects.get(student_id=student_id, section__id=section_id)
        except Student.DoesNotExist:
            return Response(
                {"error": "Student not found by this section or student id"},
                status=status.HTTP_404_NOT_FOUND,
            )

        # Check if an entry with the same payment month and year already exists for the student
        existing_entry = StudentPayment.objects.filter(
            student=student, payment_month=payment_month, payment_year=payment_year
        ).exists()

        if existing_entry:
            return Response(
                {"error": "Data already exists for the given payment month and year"},
                status=status.HTTP_409_CONFLICT,
            )

        data = {
            "student": student.id,
            "payment_month": payment_month,
            "payment_year": payment_year,
            "payment_fee": payment_fee,
            "payment_date": payment_date,
        }

        serializer = StudentPaymentPostSerializers(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentPaymentSearch(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        search_query = request.query_params.get("name", "")
        student_payment = StudentPayment.objects.filter(
            student__name__icontains=search_query
        )
        paginator = self.pagination_class()
        result_page = paginator.paginate_queryset(student_payment, request)
        serializer = StudentPaymentSerializers(result_page, many=True)
        return paginator.get_paginated_response(serializer.data)


class StudentPaymentFilterBySection(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        section = request.GET.get("section")
        if section is not None:
            student_payment = StudentPayment.objects.filter(student__section=section)
            paginator = self.pagination_class()
            result_page = paginator.paginate_queryset(student_payment, request)
            serializer = StudentPaymentSerializers(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            return Response(
                {"error": "Please provide section parameter in the URL"},
                status=status.HTTP_400_BAD_REQUEST,
            )


class StudentPaymentFilterByStudent(APIView):
    renderer_classes = [UserRenderers]
    pagination_class = MyPagination

    def get(self, request):
        student = request.GET.get("student")
        if student is not None:
            student_payment = StudentPayment.objects.filter(student=student)
            paginator = self.pagination_class()
            result_page = paginator.paginate_queryset(student_payment, request)
            serializer = StudentPaymentSerializers(result_page, many=True)
            return paginator.get_paginated_response(serializer.data)
        else:
            return Response(
                {"error": "Please provide student parameter in the URL"},
                status=status.HTTP_400_BAD_REQUEST,
            )


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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        student_payment = self.get_object(pk)
        payment_month = request.data.get("payment_month")
        payment_year = request.data.get("payment_year")
        payment_fee = request.data.get("payment_fee")
        payment_date = request.data.get("payment_date")

        # Check if an entry with the same payment details already exists for the student
        existing_entry = (
            StudentPayment.objects.filter(
                Q(student=student_payment.student),
                Q(payment_month=payment_month),
                Q(payment_year=payment_year),
            )
            .exclude(pk=pk)
            .exists()
        )

        if existing_entry:
            return Response(
                {"error": "Data already exists for the given payment month and year"},
                status=status.HTTP_409_CONFLICT,
            )

        serializer = StudentPaymentPostSerializers(student_payment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data updated successfully"}, status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        student_payment = self.get_object(pk)
        student_payment.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for student payment end

# Api view for course start


class CourseList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        course = Course.objects.all()
        serializer = CourseSerializers(course, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CourseSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        course = self.get_object(pk)
        serializer = CourseSerializers(course, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        course = self.get_object(pk)
        course.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for course end


# Api view for course rating start


class CourseRatingList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        course_rating = CourseRating.objects.all()
        serializer = CourseRatingSerializers(course_rating, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = CourseRatingSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        serializer = CourseRatingSerializers(course_rating, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        course_rating = self.get_object(pk)
        serializer = CourseRatingSerializers(course_rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        course_rating = self.get_object(pk)
        course_rating.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for course rating end


# Api view for art product start


class ArtProductList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        art_product = ArtProduct.objects.all()
        serializer = ArtProductSerializers(art_product, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ArtProductSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        art_product = self.get_object(pk)
        serializer = ArtProductSerializers(art_product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        art_product = self.get_object(pk)
        art_product.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for art product end


# Api view for art product rating start


class ArtProductRatingList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        art_rating = ArtProductRating.objects.all()
        serializer = ArtProductRatingSerializers(art_rating, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ArtProductRatingSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        serializer = ArtProductRatingSerializers(product_rating, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        art_rating = self.get_object(pk)
        serializer = ArtProductRatingSerializers(art_rating, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        art_rating = self.get_object(pk)
        art_rating.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for art product rating end


# Api view for blog start


class BlogList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        blog = Blog.objects.all()
        serializer = BlogSerializers(blog, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = BlogSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        blog = self.get_object(pk)
        serializer = BlogSerializers(blog, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        blog = self.get_object(pk)
        blog.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for blog end


# Api view for contact start


class ContactList(APIView):
    renderer_classes = [UserRenderers]

    def get(self, request, format=None):
        contact = Contact.objects.all()
        serializer = ContactSerializers(contact, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = ContactSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Post Successfully"}, status=status.HTTP_201_CREATED
            )
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
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, format=None):
        contact = self.get_object(pk)
        serializer = ContactSerializers(contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        contact = self.get_object(pk)
        contact.delete()
        return Response(
            {"msg": "Data Successfully Deleted"}, status=status.HTTP_204_NO_CONTENT
        )


# Api view for contact end


# Api view for admin dashboard
class AdminDashboardView(APIView):
    # permission_classes=[IsAuthenticated]
    def get(self, request, format=None):
        total_users = User.objects.all().count()
        total_students = Student.objects.all().count()
        total_sections = StudentSection.objects.all().count()
        total_trainers = Trainer.objects.all().count()
        total_courses = Course.objects.all().count()

        dashboard_data = {
            "total_users": total_users,
            "total_students": total_students,
            "total_sections": total_sections,
            "total_trainers": total_trainers,
            "total_courses": total_courses,
        }

        serializer = AdminDashboardSerializers(dashboard_data)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Api view for profile update
class ProfileDetail(APIView):
    renderer_classes = [UserRenderers]
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            return Profile.objects.get(user=self.request.user)
        except Profile.DoesNotExist:
            raise Http404

    def get(self, request, format=None):
        profile = self.get_object()
        serializer = ProfileSerializers(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, format=None):
        profile = self.get_object()
        serializer = ProfileSerializers(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"msg": "Data Successfully Updated"}, status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
