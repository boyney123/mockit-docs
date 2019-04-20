/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <div className="main-hero">
    <h1 className="projectTitle">Quickly create mock APIs.</h1>
    <p>Stop wasting time mocking APIs. MockIt gives you an interface to configure and create REAL mocked end points for your applications.</p>
    <div className="projectImage">
      {/* <img src={imgUrl("garie-transparent.png")} /> */}
      <img src={imgUrl("mockit-screen1.png")} />
    </div>
  </div>
);

const PromoSection = props => (
  <div className={`section promoSection ${props.className}`}>
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />

          <div className="badges">
            <a href="https://travis-ci.org/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/travis/boyney123/mockit/master.svg" />
            </a>
            <a href="https://codecov.io/gh/boyney123/mockit" target="_blank">
              <img src="https://codecov.io/gh/boyney123/mockit/branch/master/graph/badge.svg?token=AoXW3EFgMP" />
            </a>

            <a href="https://github.com/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/badge/License-MIT-yellow.svg" />
            </a>

            <a href="https://github.com/boyney123/mockit" target="_blank">
              <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
            </a>
          </div>

          <PromoSection>
            <Button href="/docs/getting-started/installation">Read Docs</Button>
            <Button target="_blank" href="https://github.com/boyney123/mockit">
              View on GitHub
            </Button>
            {/* <Button href="docs/examples/example-list">View Examples</Button> */}
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={["bottom", "top"]} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: "Changes made on the interface are instantly reflected on the server. No need to redeploy.",
        image: "https://image.flaticon.com/icons/svg/813/813322.svg",
        imageAlign: "top",
        title: "Live reload on server"
      },
      {
        content: "Quickly create, edit & delete HTTP end points. Chaos engineering, CORS enabled, Auth features and more...",
        image: "https://image.flaticon.com/icons/svg/813/813316.svg",
        imageAlign: "top",
        title: "Features"
      },
      {
        content: "Built with Docker. Run one command to get up and running straight away.",
        image: "https://image.flaticon.com/icons/svg/919/919853.svg",
        imageAlign: "top",
        title: "Setup in Minutes"
      }
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div className="productShowcaseSection" style={{ textAlign: "center" }}>
    <h2>Out the box dashboards</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: "This is another description of how this project is useful",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Description"
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users
    .filter(user => user.pinned)
    .map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <div className="feature-dark">
            <Features />
          </div>
          <div className="features">
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>No more waiting for API's to be built...</h3>
                  <p>Sometimes stubbing API's with JSON files is not enough. Use MockIt to quickly create real end points you can hit and configure for your application.</p>

                  <a class="learnmore" href="/docs/using-mockit/motivation">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img src={imgUrl("/docs/mockit/add-route-2.png")} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  <img src={imgUrl("/docs/mockit/routes-example.png")} />
                </div>
                <div class="col">
                  <h3>Easily Manage Your Mocked API</h3>
                  <p>Easy to use interface to add, edit and delete HTTP end points on the fly.</p>
                  <p>You can manage responses, status codes, HTTP methods and even add delays to each end point you add.</p>
                  <p>The server is always listening for any changes you make. So any change you make in the UI will instantly be shown on your server.</p>

                  <a class="learnmore" href="/docs/getting-started/routes">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>Chaos Engineering</h3>
                  <p>Enable the monkey and he will cause destruction on your API. He might take it down, add random delays, returns 🍌 and more...</p>

                  <a class="learnmore" href="/docs/getting-started/global-settings#chaos-monkey">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img src={imgUrl("/docs/mockit/monkey.png")} />
                </div>
              </div>
            </div>
            <div className="feature-dark feature">
              <div class="content row">
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/919/919853.svg" />
                </div>
                <div class="col">
                  <h3>Built with Docker</h3>
                  <p>MockIt is built on a Docker architecture. The client, client's server and your dynamic API all run as separate apps.</p>
                  <p>Each app shares the same configuration file using Docker volumes.</p>

                  <a class="learnmore" href="/docs/using-mockit/how-it-works">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            <div className="feature feature-light">
              <div class="content row">
                <div class="col">
                  <h3>MockIt is open source</h3>
                  <p>MockIt was built to help developers get mock APIs up and running as fast as possible.</p>
                  <p>If you would like to contribute feel free to checkout the repository.</p>

                  <a class="learnmore" href="/docs/contributing/contributing">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/174/174249.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
