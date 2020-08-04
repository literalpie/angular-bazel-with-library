# WARNING: This file is generated and it's not meant to be edited.
# Before making any changes, please read Bazel documentation.
# https://docs.bazel.build/versions/master/be/workspace.html
# The WORKSPACE file tells Bazel that this directory is a "workspace", which is like a project root.
# The content of this file specifies all the external dependencies Bazel needs to perform a build.

####################################
# ESModule imports (and TypeScript imports) can be absolute starting with the workspace name.
# The name of the workspace should match the npm package where we publish, so that these
# imports also make sense when referencing the published package.
workspace(
    name = "angular_ten_bazel_workspace",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "0f2de53628e848c1691e5729b515022f5a77369c76a09fbe55611e12731c90e3",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/2.0.1/rules_nodejs-2.0.1.tar.gz"],
)

# Fetch sass rules for compiling sass files
http_archive(
    name = "io_bazel_rules_sass",
    sha256 = "c78be58f5e0a29a04686b628cf54faaee0094322ae0ac99da5a8a8afca59a647",
    strip_prefix = "rules_sass-1.25.0",
    urls = [
        "https://github.com/bazelbuild/rules_sass/archive/1.25.0.zip",
        "https://mirror.bazel.build/github.com/bazelbuild/rules_sass/archive/1.25.0.zip",
    ],
)

####################################
# Load and install our dependencies downloaded above.

load("@build_bazel_rules_nodejs//:index.bzl", "npm_install")

npm_install(
    name = "npm",
    package_json = "//:package.json",
    package_lock_json = "//:package-lock.json",
)

load("@npm//@bazel/protractor:package.bzl", "npm_bazel_protractor_dependencies")
npm_bazel_protractor_dependencies()

load("@npm//@bazel/karma:package.bzl", "npm_bazel_karma_dependencies")
npm_bazel_karma_dependencies()

load("@io_bazel_rules_webtesting//web:repositories.bzl", "web_test_repositories")
web_test_repositories()

load("@io_bazel_rules_webtesting//web/versioned:browsers-0.3.2.bzl", "browser_repositories")
browser_repositories(chromium = True, firefox = True)

load("@io_bazel_rules_sass//sass:sass_repositories.bzl", "sass_repositories")
sass_repositories()
