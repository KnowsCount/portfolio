/*
 * @Description: My personal portfolio. 我的个人主页。
 * @Date: 2020-03-19 09:00:26
 * @Author: KnowsCount
 * @Github: https://github.com/KnowsCount/NKCS-Storage
 * @LastEditTime: 2020-12-02 18:52:06
 * @FilePath: /vuepress-theme-terminal-master/.eslintrc.js
 */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ["plugin:vue/essential", "@vue/standard"],
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
	},
	parserOptions: {
		parser: "babel-eslint",
	},
};
