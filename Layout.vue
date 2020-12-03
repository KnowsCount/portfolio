<!--
 * @Description: My personal portfolio. 我的个人主页。
 * @Date: 2020-03-19 09:00:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-03 21:04:15
 * @FilePath: /vuepress-theme-terminal-master/Layout.vue
-->
<template>
	<div class="terminal__container">
		<div style="display: flex; justify-content: center">
			<div id="terminal-mount"></div>
		</div>
		<i class="github-button fab fa-github" @click="open = true"></i>
		<i class="info-button fas fa-info-circle" @click="info = true"></i>
		<model v-model="open">
			<a
				class="link"
				href="https://github.com/KnowsCount/portfolio"
				target="_blank"
			>
				<i class="fab fa-github"></i>&nbsp;repo
			</a>
			&nbsp;or
			<a
				class="link"
				href="https://github.com/knowscount"
				target="_blank"
			>
				@KnowsCount</a
			>
			<!-- did it this way to make the format look better-->
		</model>
		<model v-model="info">
			<p>foo</p>
		</model>
	</div>
</template>

<script>
import Vue from "vue";
import Model from "./Modal";

export default {
	name: "Layout",
	data: () => ({ open: false }),
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
@import url('https://use.fontawesome.com/releases/v5.3.1/css/all.css')

.terminal__container
  display flex
  flex-direction: column
  justify-content center
  align-items: stretch
  position absolute
  left 0
  top 0
  height 100%
  width 100%

  >>> .terminal--component
    box-shadow 6px 6px 36px 4px rgba(0,0,0,0.38)
    max-width: 800px
    padding: 0
    margin: 0 15px

  .github-button
    position absolute
    top 10px
    right 12px
    color rgb(30, 31, 41)
    opacity 0.4
    font-size 1.3em

  .info-button
    position absolute
    bottom 10px
    right 12px
    color rgb(30, 31, 41)
    opacity 0.4
    font-size 1.3em

    &:hover
      cursor pointer
      opacity 0.8

  .icon-text
    opacity 0.7
    margin 0 5px

  .link
    text-decoration: none
    margin-left: 5px
    font-weight: 600
    color rgba(0,0,0,0.8)
</style>
