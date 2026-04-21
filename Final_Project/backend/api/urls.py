from django.urls import path
from .views import get_tasks, create_task, TaskDetail, TaskUpdate

urlpatterns = [
    path('tasks/', get_tasks),
    path('tasks/create/', create_task),
    path('tasks/<int:pk>/', TaskDetail.as_view()),
    path('tasks/<int:pk>/update/', TaskUpdate.as_view()),
]