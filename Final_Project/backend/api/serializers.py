from rest_framework import serializers
from .models import Task, Category, Comment

# ModelSerializer
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

# обычный Serializer
class SimpleTaskSerializer(serializers.Serializer):
    title = serializers.CharField()
    completed = serializers.BooleanField()

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()