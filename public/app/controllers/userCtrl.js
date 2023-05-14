var userControl = angular.module('userControllers',[])



userControl.controller('regCtrl',function($scope,$http){
    console.log('testing registration controller')
    $scope.regData = {
        email:"",
        username:"",
        password:"",
        role:"",
        subjects:[]
    }
    $scope.regUser = function(){
        console.log("testing new button")
        console.log($scope.regData)
    } 
    $scope.data = {
        availableOptions: [
          {id: '1', name: 'Student'},
          {id: '2', name: 'Professor'},
        ],
        selectedOption: {id: '1', name: 'Student'} 
    }
    $scope.regData.role = $scope.data.selectedOption.name
})