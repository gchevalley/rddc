var app = angular.module('rddcApp', ['ngMaterial'] );
app.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('{a');
  $interpolateProvider.endSymbol('a}');
}]);

app.controller('RddcController', function($scope, $http) {

  $scope.data = {
    title: 'Create a new dot',
    checkboxClass: ['default', 'md-warn', 'md-primary'],
    sliderClass: ['default', 'md-warn', 'md-primary'],
    //team: [],
    target: '',
    eval: '',
    rating: '',
    importance: 3,
    cats: [
      {header: 'B. FIVE STEP PROCESS', choices: [
        'Goal Setting: Strategic Vision', 'Problems: Not tolerating them', 'Problems - Perceiving them', 'Diagnosing to the Root Cause', 'Designing', 'Pushing Through Results']
      },
      {header: 'C. VALUES FUNDAMENTALS', choices: [
        'Living in Truth', 'Driven to Achieve Excellence', 'Assertive and Open-Minded at the sa...', 'Integrity']
      },
      {header: 'D. MANAGEMENT FUNDAMENTALS', choices: [
        'Principled Machine - & Higher Level T...', 'Designing the Movie Script', 'Matching People to Job Design', 'Probing Deeply to know How the Ma...', 'Managing rather than micromanagin...', 'Able to Understand and Navigate Bet...', 'Fighting to Get in Synch', 'Encouragin others to Probe', 'Cuts Through It', 'Understanding and using Bridgewate...', 'Escalating when not succeeding', 'Shaping Change', 'Willing to Touch the Nerve', 'Holding People Accountable', 'Maintaining High Standards']
      },
      {header: 'E. THINKING QUALITIES', choices: [
        'Brightness', 'Linear Thinking', 'Lateral Thinking', 'Knowing what (s)he doesn\'t know an...', 'Creativity', 'Common Sense', 'Synthesizing the situation', 'Synthesizing through time', 'Prioritizing', 'Logical Reasoning', 'Visualization', 'Seeing Multiple Possibilities', 'Practial Thinking', 'Dealing with Ambiguity', 'Ability to Self-Assess', 'Conceptual Thinking', 'Empathy', 'Organized And Reliable']
      },
      {header: 'F. TECHNICAL/FUNCTIONAL SKILLS', choices: [
        'Skill and Experience Level Relative to...']
      },
      {header: 'O. OPTIONAL', choices: [
        'Determination', 'Process Management', 'Time Management', 'Managing Vision and Urpose', 'Developing Others', 'Motivating Others', 'Self-Discipline', 'Work Habits', 'Results-Orientation', 'Proactive', 'Wise', 'Composed', 'Sizing up People', 'Taking the Bull by the Horns', 'Learning from Mistakes', 'Managerial Courage', 'Proactively making design and people...', 'Listens well', 'Precisee and Meticulous Problem Solv...', 'Thinking Strategically', 'Links open-ennded questions', 'Practical', 'Learning on the fly', 'Quick to Learn From Mistakes', 'Comfortable accepting what (s)he is r...', 'Manage Cononflict to get at Truth', 'Security Mindedness', 'Community Mindedness', 'Acts Like an owner', 'Spends Money Wisely']
      },
    ]
  };
  
  $scope.users = function() {
    $http({
      method: 'GET',
      url: '/users',
    }).then(function(response) {
      //console.log(response.data);
      $scope.data.team = response.data;
      return response.data;
    }), function(error) {
      console.log(error);
    }
  };
  $scope.users();

  $scope.submit = function() {
    /*
    console.log($scope.data.target);
    console.log($scope.data.eval);
    console.log($scope.data.rating);
    */

    if ( $scope.data.target != '' && $scope.data.eval != '' && $scope.data.rating != '' && $scope.data.importance != '' ) {
      $http({
        method: 'POST',
        url: '/eval',
        data: {
          target: $scope.data.target,
          eval: $scope.data.eval,
          rating: $scope.data.rating,
          importance: $scope.data.importance,
        },
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function(data) {
        console.log(data.data);
      }), function(error) {
        console.log(error);
      }

    };
  }
});
