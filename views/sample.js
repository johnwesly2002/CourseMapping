<!DOCTYPE html>
<html lang="en">
<head>
  <title>myForm</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css">
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="/javascripts/angularjs.js"></script>
</head>
<body ng-app="Myapp" ng-controller="myCtrl" ng-init="getdata()">

<div class="container">
  <h2>Register form</h2>
  <form>
    <div class="form-group">
      <label for="firstname">First Name:</label>
      <input type="text" class="form-control" id="firstname" placeholder="Enter firstname" name="firstname" ng-model="student.firstname" required>
    </div>
    <div class="form-group">
      <label for="lastname">Last Name:</label>
      <input type="text" class="form-control" id="lastname" placeholder="Enter lastname" name="lastname" ng-model="student.lastname" required><br>
    <button type="submit" class="btn btn-primary" ng-click="registration(student)">Submit</button>
  </form>

 <table class="table table-bordered">
  <tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Action</th>
  </tr>
  <tbody>
    <tr ng-repeat="x in studentdata">
      <td>
        <span ng-hide="hide">{{x.firstname}}</span>
        <input type="text" value={{x.firstname}} ng-show="hide" ng-model="x.firstname">
      </td>
      <td>
        <span ng-hide="hide">{{x.lastname}}</span>
        <input type="text" value={{x.lastname}} ng-show="hide" ng-model="x.lastname">
      </td>
      <td>
        <button type="button" class="btn btn-primary" ng-hide="hide" ng-click="hide=true">edit</button>
        <button type="button" class="btn btn-danger" ng-show="hide" ng-click="hide=false; update(x)">Update</button>
        <button type="button" class="btn btn-warning" ng-click="delete(x,$index)">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
</div>
</body>
</html>