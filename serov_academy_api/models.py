from django.db import models
from account_api.models import User

GENDER_CHOICES=(
    ("Male","Male"),
    ("Female","Female"),
    ("Other","Other")
)
BLOOD_CHOICES=(
    ("A+","A+"),
    ("A-","A-"),
    ("B+","B+"),
    ("B-","B-"),
    ("O+","O+"),
    ("O-","O-"),
    ("AB+","AB+"),
    ("AB-","AB-")
)
MONTH_CHOISE = (
    ("january","january"),
    ("february","february"),
    ("march","march"),
    ("april","april"),
    ("may","may"),
    ("june","june"),
    ("july","july"),
    ("august","august"),
    ("september","september"),
    ("october","october"),
    ("november","november"),
    ("december","december")
)


class Carousel(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to="images/carousel/")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
class Trainer(models.Model):
    name = models.CharField(max_length=100)
    email =models.EmailField(max_length=50,null=True,blank=True)
    gender=models.CharField(max_length=10,choices=GENDER_CHOICES)
    mobile =models.CharField(max_length=15)
    bio = models.TextField()
    designation = models.CharField(max_length=255,null=True,blank=True)
    photo = models.ImageField(upload_to='images/trainer/',null=True,blank=True)
    blood =models.CharField(max_length=10,choices=BLOOD_CHOICES)
    address =models.CharField(max_length=255,null=True,blank=True)
    enrollment_date =models.DateField()
    facebook_link = models.CharField(max_length=255,null=True,blank=True)
    instagram_link = models.CharField(max_length=255,null=True,blank=True)
    twitter_link = models.CharField(max_length=255,null=True,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class StudentSection(models.Model):
    section=models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.section
    

class Student(models.Model):
    name =models.CharField(max_length=255)
    student_id =models.CharField(max_length=255)
    section =models.ForeignKey(StudentSection,on_delete=models.CASCADE)
    email =models.EmailField(max_length=255,null=True,blank=True)
    gender=models.CharField(max_length=10,choices=GENDER_CHOICES)
    mobile =models.CharField(max_length=255)
    photo = models.ImageField(upload_to='images/student/',null=True,blank=True)
    blood =models.CharField(max_length=10,choices=BLOOD_CHOICES)
    address =models.CharField(max_length=255,null=True,blank=True)
    father_name =models.CharField(max_length=255,null=True,blank=True)
    mother_name =models.CharField(max_length=255,null=True,blank=True)
    admission_date =models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name 
    

class StudentPayment(models.Model):
    student = models.ForeignKey(Student,on_delete=models.CASCADE)
    payment_month = models.CharField(max_length=15,choices=MONTH_CHOISE)
    payment_year =models.CharField(max_length=15)
    payment_fee = models.CharField(max_length=100)
    payment_due = models.CharField(max_length=5,default="00")
    payment_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self) :
        return self.student.name

class Course(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/course/')
    price = models.CharField(max_length=10)
    trainer = models.ForeignKey(Trainer,on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) :
        return self.title
    

class CourseRating(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) :
        return self.user.name
    

class ArtProduct(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to="images/artproduct/")
    price = models.CharField(max_length=10)
    creator_name = models.CharField(max_length=100)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) :
        return self.title
    
class ArtProductRating(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    artproduct = models.ForeignKey(ArtProduct,on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) :
        return self.user.name 
    

class Blog(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    title=models.CharField(max_length=255)
    photo=models.ImageField(upload_to='images/blog/')
    description=models.TextField()
    created_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    

class Contact(models.Model):
    user =models.ForeignKey(User,on_delete=models.CASCADE)
    subject = models.CharField(max_length=255)
    message=models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.user.name
    

