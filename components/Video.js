import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { device } from '~/config/utils';
import Play from '~/assets/play.svg';
import gsap from 'gsap';

const VideoContainer = styled.div`
	margin: 50px 0;

	@media ${device.laptop} {
	}
`;

const VideoWrapper = styled.div`
	max-width: 863px;

	margin: 0 auto;
	position: relative;
`;

const intervalTime = [1, 25, 50, 75];

const VideoEl = ({ data }) => {
	const videoPlayerRef = useRef('');

	const [metaData, setMetaData] = useState({
		loaded: false,
		duration: null,
		type: '',
	});

	const loadedMetaData = (e) => {
		videoPlayerRef.current &&
			setMetaData({
				loaded: true,
				duration: videoPlayerRef.current.duration,
				type: 'video',
				name: videoPlayerRef.current.dataset.name,
			});
	};

	useEffect(() => {
		let togglePlay = (e) => {
			videoPlayerRef.current.play();
		};

		// let playVideo = e => {

		// }

		videoPlayerRef.current.addEventListener('loadedmetadata', loadedMetaData);
	}, []);

	useEffect(() => {
		const finalArray = [];

		if (metaData.loaded) {
			let playingVideo = (e) => {
				console.log('playing');
				permutiveVideo(metaData.duration, 0, document.title, metaData.name);

				dataLayer.push({
					event: 'Play',
					mediaTitle: document.title + '-' + metaData.name,
					mediaState: 'play',
					mediaType: metaData.type === 'video' ? 'Video' : 'Audio',
				});
				startTimer(e.target, metaData.duration, metaData.type, finalArray);
			};

			let pausingVideo = (e) => {
				if (videoPlayerRef.current && videoPlayerRef.current.readyState === 4) {
					dataLayer.push({
						event: 'Pause',
						mediaTitle: document.title + '-' + metaData.name,
						mediaState: 'pause',
						mediaType: metaData.type === 'video' ? 'Video' : 'Audio',
					});
				}
			};

			videoPlayerRef.current.addEventListener('play', playingVideo);
			videoPlayerRef.current.addEventListener('pause', pausingVideo);

			return () => {
				videoPlayerRef.current &&
					videoPlayerRef.current.removeEventListener('play', playingVideo);
				videoPlayerRef.current &&
					videoPlayerRef.current.removeEventListener('pause', pausingVideo);
			};
		}
	}, [metaData]);

	const startTimer = (media, duration, type, finalArray) => {
		clearInterval(intervalRef);
		const intervalRef = setInterval(() => {
			const currentTime = Math.round((media.currentTime / duration) * 100);
			if (
				intervalTime.includes(currentTime) &&
				!finalArray.includes(currentTime)
			) {
				finalArray.push(currentTime);
				dataLayer.push({
					event: 'Playing',
					mediaTitle: document.title + '-' + metaData.name,
					mediaType: type === 'video' ? 'Video' : 'Audio',
					mediaProgress: `${currentTime}%`,
				});

				if (currentTime != 1) {
					permutiveVideo(
						duration,
						currentTime,
						document.title,
						media.dataset.name,
						'playing'
					);
				}
			}

			if (media.ended) {
				finalArray.length = 0;
				dataLayer.push({
					event: 'Ended',
					mediaTitle: document.title + '-' + metaData.name,
					mediaType: type === 'video' ? 'Video' : 'Audio',
					mediaProgress: '100%',
				});
				permutiveVideo(
					duration,
					currentTime,
					document.title,
					metaData.name,
					'ended'
				);
				clearInterval(intervalRef);
			}
		}, [500]);
	};

	function permutiveVideo(duration, progress, title, videoId, string) {
		let prog = parseInt(progress) / 100;
		const dur = parseInt(duration);
		console.log('sending');
		permutive.track('VideoEngagement', {
			campaign: 'Qualcomm',
			createdAt: new Date(),
			duration: dur,
			title,
			videoId,
			progress: prog,
		});
	}

	return (
		<VideoContainer>
			<VideoWrapper>
				<video
					preload="metadata"
					onCanPlayThrough={loadedMetaData}
					ref={videoPlayerRef}
					controls
					data-name={data.title}
					playsInline
					autoPlay
					muted
				>
					<source src={data.webm} type="video/webm" />
					<source src={data.mp4} type="video/mp4" />
				</video>
			</VideoWrapper>
		</VideoContainer>
	);
};

export default VideoEl;
