from django.views.generic import FormView
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.forms import PasswordChangeForm
from django.http import HttpResponseRedirect

from financial.models import Manager


class UpdatePasswordView(LoginRequiredMixin, FormView):
    template_name = 'accounts/update_password.html'    
    
    form_class = PasswordChangeForm

    def isManager(self, user):
        if Manager.objects.filter(user= user).exists():            
            return True
        else:            
            return False

    def get_form_kwargs(self):
        kwargs = super(UpdatePasswordView, self).get_form_kwargs()
        kwargs['user'] = self.request.user

        if self.isManager(self.request.user):
            self.template_name = 'financial/update_password_manager.html'
        else:
            self.template_name = 'financial/update_password_associated2.html'

        return kwargs

    def form_valid(self, form):
        form.save()    
        user = self.request.user
        if self.isManager(self.request.user):                   
            success_url = reverse_lazy('accounts:login_manager')
        else:
            success_url = reverse_lazy('accounts:login')                   
    
        return HttpResponseRedirect(success_url)

update_password_view = UpdatePasswordView.as_view()
    