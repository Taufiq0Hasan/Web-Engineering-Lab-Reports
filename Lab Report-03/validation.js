 $(document).ready(function() {
      $('#myForm').on('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        $('.error').text('');
        $('#successMessage').text('');

        const name = $('#name').val().trim();
        const id = $('#id').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();
        const department = $('#department').val();

        if (name === '') {
          $('#nameError').text('Name is required');
          isValid = false;
        }

        if (id === '') {
          $('#idError').text('ID is required');
          isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
          $('#emailError').text('Email is required');
          isValid = false;
        } else if (!emailPattern.test(email)) {
          $('#emailError').text('Invalid email format');
          isValid = false;
        }

        if (password === '') {
          $('#passwordError').text('Password is required');
          isValid = false;
        } else if (password.length < 6) {
          $('#passwordError').text('Password must be at least 6 characters');
          isValid = false;
        }

        if (confirmPassword === '') {
          $('#confirmPasswordError').text('Please confirm your password');
          isValid = false;
        } else if (password !== confirmPassword) {
          $('#confirmPasswordError').text('Passwords do not match');
          isValid = false;
        }

        if (department === '') {
          $('#departmentError').text('Please select a department');
          isValid = false;
        }

        if (isValid) {
          $('#successMessage').text('Form submitted successfully!');
          this.reset();
        }
      });
    });