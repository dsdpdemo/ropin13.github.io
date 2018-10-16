(function(){	
	var app = angular.module("demoApp", []);

	app.controller('demoController', function($scope){
		
		$scope.changeTopic = function(topic) {
			$scope.nowTopic = topic;
		};
		
	
		$scope.init = function(){
			$scope.cardList = getCards();
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
	
	var getCards = function() {
		return {
			"card1":{
				"title": "環境地質好簡單，檢索自己來",
				"description": "環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來環境地質好簡單，檢索自己來",
				"link": "https://docs.google.com/document/d/e/2PACX-1vTco3PAYde7mkWjLV6ls-AKA7oscnGdOQVXZgzTGMJfdCyHmeOJDp9cg5n1LOlrYSgNL30rEk3yanFR/pub",
				"image": "https://lh4.googleusercontent.com/NtlpZBeVn5jWbayEVAiAfj2-iuxbV_VMPtmPhdB8jAb9D2vVgTvqvM6nGQ_HAUG3wSsgfevdiMA9P7Iw4Fekm66I92Yt2d1HPGfsJq0UPpiUBue-rb2cE_sIutFNrOVy2L-LCW8O"
			},
			"card2":{
				"title": "地質調查小工具，省錢好用掌上機",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQG6VogINyOTfllNhR0Aehkl5JqzqixdBhuO-9V2SgGKUW2elZ521d77hp0z56M7wCGFZkx1F8L9exi/pub",
				"image": "https://lh3.googleusercontent.com/P-ilUNx2YPPVdtrtzxPhed3glZ4t3fPYtVrI9RBQ9kszl3ucQROE_8dxMtwWAk20KTjvckrkE7F3WnibYwiUGlyCyzwX0xRsatQLDJlggCs5cNFaqYnp_TQgjveV8UnD8X30uI93"
			},
			"card3":{
				"title": "你知道\"樹\"的一生如何過的嗎?",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vTEJIUHQaeiYum4cSsVxYxJOHFPQT8QiHhOy-hA66cS8SK75L69AlYPFLW3Atj1Ffvs71VihehQr_ND/pub",
				"image": "https://lh4.googleusercontent.com/uBg0HIyzvt7wY0BIMxQF4O6EaqDbNNV6OJvJFgfFCxKIpWW1kWj8ir0t-P3BDoRyOsa5C-n0OO8LNgOryxT7s8eb4nAAIoaajw60LIl8kkGQMZBzR75ojxsU9L9qI3U7Uf5Pt9Ts"
			},
			"card4":{
				"title": "瀕臨絕種的動物們，由我們來守護",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vRGE8OwQsvpRW95B9ex3JHuRHSsGVDyyXcSqt4OQw_EjEnq-HC1g6_BbLOWvAFXZPkuNJXUTGlNHUma/pub",
				"image": "https://lh3.googleusercontent.com/qGnkltwPAxjPV-wt75S39QTNXm8h3mY4T5m-uwhhqT8r0AbE1-q5TS9gW8NXhzj-Niemdz1B8pqYTcH6cOqF0lZN5TT2Me3f3ws38K9MYnU_JENGlOe4Vla18_I1mXFPHdEM-94L"
			},
			"card5":{
				"title": "探索保育類野生動物的足跡",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vTMV2piA6SrkSXer011ul4fyWsZwFONoV4UpUmQBNXESO0mDxmUxisW0fT14E9l81gJVXNrmekAhYLe/pub",
				"image": "https://lh3.googleusercontent.com/Yx77Cyeza5D90NlgwbNyCCR7MGtNAdIzz2xlAhEHqzyWHqgPkbUVFaF0SXAvGv35NkmMNBQnyZ-cOpNtrWXLxIXaT7P0MJZG4gr3DRnmgV3ZdQQ1YA4n_4J_yxDdJRbCiTVyHy0S"
			},"card6":{
				"title": "走進大自然探索生態之美",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vSk7Xmp2acxg0JiFWXz_Z2WnTQgKqbYWmCdKj-NlGxPdLw-PG_uF8FWCtpzOyy1TgiFvwSxjC6g57v9/pub",
				"image": "https://lh3.googleusercontent.com/fY4TDCQNpOxcQ1FE_QObOer8K1XT8h2hf9c8M8EKCOvaN1TQSwi3cW8hKnIZ4zTAvGWeI5YvL8zYs3wEXZKYQtBwJmHQJv8B-h-fI8cTvEdLNBMH-oHjitOb1GmcJ7yvpJDpvH3w"
			},"card7":{
				"title": "一起協助我們編輯天氣圖資！",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vR4Wzf02ieYyEN1hkR-92WW3XrTyaIw3bLMHDxFIHnSVFtKXcs6xW3BNEsz28UFXev-62Rsk3HhuM9p/pub",
				"image": "http://61.56.13.182/static/cpmd/img/index_bg.jpg"
			},"card8":{
				"title": "雲寶說故事．公民科學家．氣象小知識",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vRubKGiAUmlVMR2kb1G4ThnMbgIQBdXJGd1Hu0HXf_-TbgkYuJJ_pfyckbj_jO0R_L0kMxD6cnsR2l9/pub",
				"image": "https://lh3.googleusercontent.com/P6LmiQ0JDh924CWigs398DsyC8KQ9zBc30iBwybGfqRnZgBmBORTY7eijARAprJNTStWQNnXCwAgUeeRdOI7EOpkuWEvnR_HsEiqYxqhpDpdJWhkoRGAcLEPxv7KOCKMcA5duTDf"
			},"card9":{
				"title": "防災知識不可少，潛勢溪流很重要",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQNue93XozcnwKgmcoa8p9SUqUTZUGDM0jLavQXfmIGS1O1fdWSoGVgD--BIpj6MoVlVa1B7j1MbiFD/pub",
				"image": "https://lh6.googleusercontent.com/inJaERHmr42FjJeM_XFZnjafcu6CQSTpmMogbSkRR7-yeRgOOxnm2HWJDCWPvvWTuxrvTWIrXkQPHs3zbUzL4Yc_juPPuxe8n7UmY-p5NQ6QlRLMDHyLEwqx_rkYVVXbnuBXi1ys"
			},"card10":{
				"title": "生活安全哪裡找，掌上機查查就知道",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vSeq4ujJB9Y3tjoXDRu4W60zAb__1X-xD5wW0JJI6fYRScJGjScI08qlBXlQrh4F1Kcjt4JRs45n7f8/pub",
				"image": "https://lh4.googleusercontent.com/SZNcNuTFiRZ_4U4whJYT-stkvRBPZcnK--ppd5C1k1YSKTGUJvwl0BfuIFlj91xtmJfZK0ZolaiFF67dfFBKoRm7UaxPifnDn9Fh488IV57Y9kBuydEcwslJ_1_nT3dLNm-0iies"
			},"card11":{
				"title": "毛毛細雨積水成淵，淹水警惕不可少",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vSiPQLyGECehq_kjqzqSkKkaV4SO3QhYJPt2ODUrCsZKJBJwc5vi9_bVLYd36QqKzK1oCfVH-RN0-f0/pub",
				"image": "https://lh4.googleusercontent.com/HTPF9POH0oFOqmD2Df-_uPKvBo1wvUfPXenHHCmBT1ikRQ6pJ9wvgQGYvSHkByiMg1NXJSRqi4bDpIpJT5tdoU-IRYyVHjHEPgBay3IhtKTjR1eQutLioKyp7I2FlLRG_ISMnmeL"
			},"card12":{
				"title": "匯集眾人之智慧創意無邊界",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQqbIkBcYtAqf2tSrduPTDoUcuBcOSAa09Agd2gWqN2Qi9iVpndvESjB7YRzoNF3xd1cX9xK3OnPbsf/pub",
				"image": "https://lh6.googleusercontent.com/3DJNZ7NrHTrceWlPHKEyyR3pYSKz_i5cA2br_Dk8bJ7dRoxkPuP5r4Rxjom0ZlV-G9_vN87Ei8OZsqn20B1EpjfhfkEbHBkhOGDzgnEJ-y6y7ArjbLF0Iy1LNWBfsFPDzjEDX9QS"
			},"card13":{
				"title": "水資料工作坊種子教師找的就是您",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vSyzi9mzy-54j2pIlPcTACKk_uG-GpkaGg1ZeSJnSXU9UA4w44cQAfhnqut2G7hW3OGKiUS39hpWcg-/pub",
				"image": "https://lh4.googleusercontent.com/itVPfojzgVmzs3nTIlQeQVJCFw-2JXWTtGG6b6nIXKkzXWRllJWYf97RpZILxw6nuAQhthtyHow8z1BsfOaxjdZu4O70HSTMR1USQ98tgWVFjKzyl_1Ntk9Vy9O5upTw1iCDcgHn"
			},"card14":{
				"title": "開放水利資料流通共享",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQeqMqLfu-tdDg1p_kKO77iZ_CJDgKouGAuN5okaarVTrJKQwsyqWgv-J7IEgw-HgxGSe6l-MkE1ZAO/pub",
				"image": "https://lh4.googleusercontent.com/QmPR2_kWm4xrKouw99v_pjqSDxgjoEjXWpIoU8HkEkbFStv89s7u-AR2xfjLf8XKKzcdRJJ-x5jjncbhpNu2fbBexDGrEz_q4SAc9D9CicEbZxiE7oP29UtoPCqGtyBzHFzFz2Nq"
			},"card15":{
				"title": "乾旱來了怎麼辦，一起節約省用水",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vS5QgcZrRFuomLbhnkKNWNwseGwYuP_Vdw4Gsid1b5aMYiAQIyUXX1RMBnaVN1XqCLPCEC0A5V_lgVq/pub",
				"image": "https://lh5.googleusercontent.com/z5j35mRw24WTlJTHFpj-HkMi8YqwCd0C1SHryHd_W7hfuLDMtnDx2t6FByLHFSoPYstXCAaCr6XLZ3qd-_d6xvSqwJizm8DeRIINXqFiggT1UcW4Mc9pwEnTPhWIMt4N3zHf7Xm5"
			},"card16":{
				"title": "水庫裡是水還是泥？",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vTRNn6G5iKNGaIthJ2v0KNBWMyLk2aGhjaS20fNpIzWsnN1-LfcbZtUXT0ifr4gfXrusbdFl7_HIZh1/pub",
				"image": "https://lh5.googleusercontent.com/yOyKUcuPUTr9cTFAYmLtgxPI17PBdZJaCCB76vJu-pl_wVbIBDAAycgYhJ-CRowjeftBJf4tA9oTOrLen2HSPtZfExwp7q-gjQf-b5yoRXvnOLyL-M6WmBtCY_De0Pn43NfW3PgR"
			},"card17":{
				"title": "一圖秒懂淹水警戒區",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vRceUgd3JHg49u60apNe5tsIPty0BR8JrYfY9ZqcEJLP4_HE8Bsf6KKVseU2XZHtZ5rGbQh9HX91w-m/pub",
				"image": "https://lh4.googleusercontent.com/H5USYgK9Gue3O8V1-2cJlTbdVghBXaWwXQmIAs0rDFEE5qpRFPJZBcBVKBVsmFYG1zXDYw-7gEaONttf9hv5zfKcEXXPYBokbYXE5Pd85_mvUWE_0OFtnpoeAVlbKkY1XMOzns7l"
			},"card18":{
				"title": "給石虎一條安全的路",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vRmz4ONsS2ARdjqqdtKJ8haqG7Vvqmf0SR8pHAnkA4pd2YTGXGi7jxIeb3Xvx8zpspb6x8S7KYIrs0R/pub",
				"image": "https://lh5.googleusercontent.com/xditFetjFKG8EyJfWpDJ0vc2arKNzWH7bZ7Quss-wSlAWqy7mxIWrH_iYrlP99nWsikk-iI3xuQ0JHZAstCc2VElbbwUuoz-cFyzZEjsN5hzp3ozCh-G1P1D52u6kixudWcvtYU1"
			},"card19":{
				"title": "你不知道的森林祕密景點大公開",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQo5MLoIfBgnFc7Hiyg8p7TLhk4mX3m7iSLOZlAmjhqjtX7b1FjgyHZLWvtUNFkORIwfnAh0OqCvWRS/pub",
				"image": "https://lh3.googleusercontent.com/Qu3HBNU94XGcLN6A6tUyh0pDMBUvghOhO4hkoTq0lvosmPdrbL6GoZoKQ28X69lUMKbqFFH90a9mSOE1stJdvTgsIk-ov0_1y36wnoZmcXS-88bpxp2vY-eQMtHIwSVNquTuEAAY"
			},"card20":{
				"title": "沙塵風暴來臨，讓我報給你知道",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vTcTXNYB3mLX_VaP9F_oaXyWDuSfhkcDtGqU_W6zrKxTpBT59Qlbs5Ur1uQWNa0TDQUD3bjVsLBon49/pub",
				"image": "https://lh4.googleusercontent.com/il3L9I5tDtAjJ5U4U4p3hVQVxk-bqi3KvpzGDGiwvbboZEmk4ReCS2Qq0W-6vtw2Dbj1iMZSXh66pOy6H8vzvKFdqSyXhNVcQmVDAdsDNCn-0OJNH6-evz20RO9z6EIJhnG9Hbf1"
			},"card21":{
				"title": "衛星海溫與特定魚群分布探討與引用相關數據與API程式(待資料提供)",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vRm1COCKzMg6pXnayr6vg3d5E36bxL8lrwGnXJeTbJBcAAzvlIfcJb3MZ4XP9XjHv-YqhPogx376Jc7/pub",
				"image": ""
			},"card22":{
				"title": "臺灣地區雷達1小時外延雨量圖(待資料提供)",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vQqHwug79lqJMOF2tIAWLdCDBOLZbQI97QJKdBilWDFdf3FiaxZrmpSy9eLNQIIl1NOF8glTKGeQSuw/pub",
				"image": ""
			},"card23":{
				"title": "高溫日數分布圖(待資料提供)",
				"description": "",
				"link": "https://docs.google.com/document/d/e/2PACX-1vSET3_fOdOemuxxjYeLGxCt1Wmj5a_i_Se1bT-pKzyVqa88Ie2qnM9HfftgJ5FckVHh3gwCrW08zDFz/pub",
				"image": ""
			}
		}
	};
	
})();