const FtEvents = () => {
	(function () {
		if (typeof window !== 'undefined') {
			const ATTENTION_INTERVAL = 15000;
			const ATTENTION_EVENTS = [
				'load',
				'click',
				'focus',
				'scroll',
				'mousemove',
				'touchstart',
				'touchend',
				'touchcancel',
				'touchleave',
			];
			const UNATTENTION_EVENTS = ['blur'];
			const EXIT_EVENTS = ['beforeunload', 'unload', 'pagehide'];

			const broadcast = function (name, data, bubbles = true) {
				const rootEl = Element.prototype.isPrototypeOf(this)
					? this
					: document.body;
				let event;

				try {
					event = new CustomEvent(name, {
						bubbles: bubbles,
						cancelable: true,
						detail: data,
					});
				} catch (e) {
					event = CustomEvent.initCustomEvent(name, true, true, data);
				}
				rootEl.dispatchEvent(event);
			};

			let events = {};
			const fireBeacon = (contextSource, percentage) => {
				console.log('scrollDepth');
				const data = {
					action: 'scrolldepth',
					category: 'page',
					meta: {
						percentagesViewed: percentage,
						attention: events.attention.get(),
					},
					context: {
						product: 'next',
						source: contextSource,
					},
				};
				broadcast('oTracking.event', data);
			};

			const customTracking = () => {
				function convertToBoolean(string) {
					if (string === 'true') {
						return true;
					} else {
						return false;
					}
				}

				if (!document.querySelector('.brandmetric')) {
					const imgScript = new Image();
					imgScript.src =
						'https://collector.brandmetrics.com/Info?pixel=a43f03a60a7b4a819bfceaf65da9d2ea';
					imgScript.classList.add('brandmetric');
					document.getElementsByTagName('head')[0].appendChild(imgScript);
				}

				var parent = document.querySelector('meta[name="parent"]');
				var feature = document.querySelector('meta[name="feature"]');
				var author = document.querySelector('meta[name="author"]');
				var sponsor = document.querySelector('meta[name="sponsor"]');
				var articleName = document.querySelector('meta[name="articleName"]');
				var adbook_campaign_id = document.querySelector(
					'meta[name="adbook_campaign_id"]'
				);
				var campaign = document.querySelector('meta[name="campaign"]');
				var hasVideo = document.querySelector('meta[name="hasVideo"]');
				var articleBranded = document.querySelector(
					'meta[name="articleBranded"]'
				);
				var articleContentType = document.querySelector(
					'meta[name="articleContentType"]'
				);
				var articleAdvertiserIndustry = document.querySelector(
					'meta[name="articleAdvertiserIndustry"]'
				);
				var articleParent = document.querySelector(
					'meta[name="articleParent"]'
				);
				var articleChild = document.querySelector('meta[name="articleChild"]');
				var videoType = document.querySelector('meta[name="videoType"]');
				var articleApp = document.querySelector('meta[name="articleApp"]');
				var articleDate = document.querySelector('meta[name="articleDate"]');

				const data = {
					action: 'view',
					category: 'brandedContent',
					feature: feature ? feature.getAttribute('content') : null,
					author: author ? author.getAttribute('content') : null,
					sponsor: sponsor ? sponsor.getAttribute('content') : null,
					articleName: articleName ? articleName.getAttribute('content') : null,
					adbook_campaign_id: adbook_campaign_id
						? adbook_campaign_id.getAttribute('content')
						: null,

					campaign: campaign ? campaign.getAttribute('content') : null,
					hasVideo: hasVideo
						? convertToBoolean(hasVideo.getAttribute('content'))
						: null,
					videoType: videoType ? videoType.getAttribute('content') : null,
					branded: articleBranded
						? convertToBoolean(articleBranded.getAttribute('content'))
						: null,
					primaryTopic: articleParent
						? articleParent.getAttribute('content')
						: null,
					secondaryTopic: articleChild
						? articleChild.getAttribute('content')
						: null,
					advertiserIndustry: articleAdvertiserIndustry
						? articleAdvertiserIndustry.getAttribute('content')
						: null,
					contentType: articleContentType
						? articleContentType.getAttribute('content')
						: null,
					app: articleApp ? articleApp.getAttribute('content') : null,
					publishDate: articleDate ? articleDate.getAttribute('content') : null,
				};
				broadcast('oTracking.event', data);
			};

			class Attention {
				constructor() {
					this.totalAttentionTime = 0;
					this.startAttentionTime;
					this.endAttentionTime;
					this.hasSentEvent = false;
				}

				init() {
					//Add events for all the other Attention events
					for (let i = 0; i < ATTENTION_EVENTS.length; i++) {
						window.addEventListener(ATTENTION_EVENTS[i], (ev) =>
							this.startAttention(ev)
						);
					}

					for (let i = 0; i < UNATTENTION_EVENTS.length; i++) {
						window.addEventListener(UNATTENTION_EVENTS[i], (ev) =>
							this.endAttention(ev)
						);
					}

					// Need to wait for this to be available
					window.Origami['o-viewport'].listenTo('visibility');
					document.body.addEventListener(
						'oViewport.visibility',
						(ev) => this.handleVisibilityChange(ev),
						false
					);

					this.addVideoEvents();

					// Add event to send data on unload
					EXIT_EVENTS.forEach((event) => {
						window.addEventListener(event, () => {
							if (this.hasSentEvent) {
								return;
							}
							this.hasSentEvent = true;
							this.endAttention();
							broadcast('oTracking.event', {
								category: 'page',
								action: 'interaction',
								context: {
									attention: {
										total: this.totalAttentionTime,
									},
								},
							});
						});
					});
				}

				startAttention() {
					clearTimeout(this.attentionTimeout);
					if (!this.startAttentionTime) {
						this.startAttentionTime = new Date().getTime();
					}
					this.attentionTimeout = setTimeout(
						() => this.endAttention(),
						ATTENTION_INTERVAL
					);
				}

				startConstantAttention() {
					this.constantAttentionInterval = setInterval(
						() => this.startAttention(),
						ATTENTION_INTERVAL
					);
				}

				endConstantAttention() {
					this.endAttention();
					clearInterval(this.constantAttentionInterval);
				}

				endAttention() {
					if (this.startAttentionTime) {
						this.endAttentionTime = new Date().getTime();
						this.totalAttentionTime += Math.round(
							(this.endAttentionTime - this.startAttentionTime) / 1000
						);
						clearTimeout(this.attentionTimeout);
						this.startAttentionTime = null;
					}
				}

				get() {
					this.endAttention();
					this.startAttention();
					return this.totalAttentionTime;
				}

				addVideoEvents() {
					const videoPlayers = document.getElementsByTagName('video');
					for (let i = 0; i < videoPlayers.length; i++) {
						console.log(videoPlayers);
						videoPlayers[i].addEventListener('playing', (ev) =>
							this.startConstantAttention(ev)
						);
						videoPlayers[i].addEventListener('pause', (ev) =>
							this.endConstantAttention(ev)
						);
						videoPlayers[i].addEventListener('ended', (ev) =>
							this.endConstantAttention(ev)
						);
					}
				}

				handleVisibilityChange(ev) {
					if (ev.detail.hidden) {
						this.endAttention();
					} else {
						this.startAttention();
					}
				}
			}

			events.attention = new Attention();
			events.scrollDepthInit = (
				contextSource,
				{ percentages = [25, 50, 75, 100], selector = 'body' } = {}
			) => {
				if (!(contextSource && contextSource.length)) {
					throw new Error('contextSource required');
				}

				const rp = document.querySelector('.rpComp');
				const rpText = rp ? rp.querySelector('.rpText') : null;

				function setPercentage(percentage) {
					if (rp && rpText) {
						rp.setAttribute('data-percentage', `${percentage}`);
						rpText.innerText = percentage;
					}
				}

				const intersectionCallback = (observer, changes) => {
					changes.forEach((change) => {
						if (change.isIntersecting || change.intersectionRatio > 0) {
							const scrollDepthMarkerEl = change.target;
							setPercentage(
								scrollDepthMarkerEl.getAttribute('data-percentage')
							);
							fireBeacon(
								contextSource,
								scrollDepthMarkerEl.getAttribute('data-percentage')
							);
							if (scrollDepthMarkerEl.parentNode) {
								scrollDepthMarkerEl.parentNode.removeChild(scrollDepthMarkerEl);
							}
							observer.unobserve(scrollDepthMarkerEl);
						}
					});
				};

				const element = document.querySelector(selector);
				if (element && window.IntersectionObserver) {
					const observer = new IntersectionObserver(function (changes) {
						intersectionCallback(this, changes);
					});

					percentages.forEach((percentage) => {
						const targetEl = document.createElement('div');
						targetEl.className = 'n-ui__scroll-depth-marker';
						targetEl.style.position = 'absolute';
						targetEl.style.top = `${percentage}%`;
						targetEl.style.bottom = '0';
						targetEl.style.width = '100%';
						targetEl.style.zIndex = '-1';
						targetEl.setAttribute('data-percentage', percentage);
						element.appendChild(targetEl);
						observer.observe(targetEl);
					});
				}
			};

			const intervalId = setInterval(function () {
				if (window.Origami) {
					clearInterval(intervalId);
					clearTimeout(timeoutId);
					events.attention.init();
					events.scrollDepthInit('paid-post', { selector: '#content' });
				}
			}, 20);

			const timeoutId = setTimeout(function () {
				clearInterval(intervalId);
			}, 1000);

			function pageView() {
				const data = {
					action: 'view',
					category: 'brandedContent',
					feature: feature ? feature.getAttribute('content') : null,
					author: author ? author.getAttribute('content') : null,
				};
				broadcast('oTracking.event', data);
			}

			window.addEventListener('load', function () {
				customTracking();
			});
			customTracking();
		}
	})();
};

export default FtEvents;
