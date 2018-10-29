(function(){	
	var app = angular.module("demoApp", []);

	app.controller('demoController', function($scope){
		
		$scope.changeTopic = function(topic) {
			$scope.nowTopic = topic;
		};
		
	
		$scope.init = function(){
			$scope.cardList = cards;
			$scope.cardArr = [];
			$scope.topics = {
				'recommendation': '最新推薦',
				'envStory': '環境故事',
				'envInfo': '環境圖資',
				'mixApplication': '跨域應用',
				'dataQuality': '資料品質',
				'cooperation': '民間合作',
				'dataPlatform': '資料策展平台',
				'ecpPublicInfo': '環境雲公開資訊',
				'aboutUs': {
					'stage4Gov': '第四階段政府',
					'stage5Gov': '第五階段政府'
				}
			};
			$scope.nowTopic = $scope.topics.recommendation;
			$scope.alreadyClickCards = false;
			angular.forEach($scope.cardList, function(value, key){
				if(!value.image){
					value.image = "https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg";
				}
				$scope.cardArr.push(value);
			});
		};
		
		$scope.init();
	});
	
})();