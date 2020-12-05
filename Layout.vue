<!--
 * @Description: My personal portfolio. 我的个人主页。
 * @Date: 2020-03-19 09:00:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-05 11:24:41
 * @FilePath: /vuepress-theme-terminal-master/Layout.vue
-->
<template>
	<div class="terminal__container">
		<div style="display: flex; justify-content: center">
			<div id="terminal-mount"></div>
		</div>
		<i class="info-button fas fa-info-circle" @click="open = true"></i>
		<i class="info-button fas fa-info-circle" @click="info = true"></i>
		<a
			href="https://github.com/knowscount/portfolio"
			class="github-corner"
			aria-label="View source on GitHub"
			><svg
				width="80"
				height="80"
				viewBox="0 0 250 250"
				style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;"
				aria-hidden="true"
			>
				<path
					d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"
				></path>
				<path
					d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
					fill="currentColor"
					style="transform-origin: 130px 106px;"
					class="octo-arm"
				></path>
				<path
					d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
					fill="currentColor"
					class="octo-body"
				></path></svg
		></a>
		<model v-model="info">
			<span><b>ls / ll: </b>list files</span>
			<br /><!-- why does br not work??...-->
			<span><b>cat: </b>print file content</span>
		</model>
	</div>
</template>

<script>
import Vue from "vue";
import Model from "./Modal";

export default {
	name: "Layout",
	data: () => ({ open: false, info: false }),
	components: { Model },
	computed: {
		data() {
			return this.$page.frontmatter;
		},
		fs() {
			return {
				home: {
					[this.data.user]: {
						projects: this.projects,
						".bashrc": 'cd ~\nalias ll="ls -l"',
						"about.txt": this.data.about,
						"socials.txt": this.socials,
					},
				},
			};
		},
		projects() {
			let projects = {};
			this.data.projects.map((project) => {
				projects[`${project.title}.txt`] = `
			Title: ${project.title}\nLink: ${project.link}\nDescription: ${project.description}
		`.trim();
			});
			return projects;
		},
		config() {
			return {
				user: this.data.user,
				welcome: this.data.welcome,
				fileSystem: this.fs,
			};
		},
		socials() {
			return this.data.socials
				.map((social) => `${social.title} -> ${social.link}`)
				.join("\n");
		},
	},
	mounted() {
		// We have to import vue-terminal here because it tries to access global variables (`window` I think).
		// This causes an issue with vue-press during compilation
		// eslint-disable-next-line
		import("@knowscount/vue-terminal").then(({ default: plugin }) => {
			console.log(plugin);
			Vue.use(plugin);
			const Terminal = plugin.Terminal;
			const Component = Vue.extend({
				render: (h) =>
					h(Terminal, {
						props: this.config,
						class: "terminal--component",
					}),
			});
			new Component().$mount("#terminal-mount");
		});
	},
};
</script>

<style scoped lang="stylus">
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css');

.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}

.terminal__container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: stretch;
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: 100%;

	>>> .terminal--component {
		box-shadow: 6px 6px 36px 4px rgba(0, 0, 0, 0.38);
		max-width: 800px;
		padding: 0;
		margin: 0 15px;
	}

	.github-button {
		position: absolute;
		top: 10px;
		right: 12px;
		color: rgb(30, 31, 41);
		opacity: 0.4;
		font-size: 1.3em;
	}

	.info-button {
		position: absolute;
		bottom: 10px;
		right: 12px;
		color: rgb(30, 31, 41);
		opacity: 0.4;
		font-size: 1.3em;

		&:hover {
			cursor: pointer;
			opacity: 0.8;
		}
	}

	.icon-text {
		opacity: 0.7;
		margin: 0 5px;
	}

	.link {
		text-decoration: none;
		margin-left: 5px;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.8);
	}
}
</style>
