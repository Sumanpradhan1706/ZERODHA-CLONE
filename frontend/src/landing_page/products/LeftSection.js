import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  const hasTryDemo = Boolean(tryDemo);
  const hasLearnMore = Boolean(learnMore);
  const hasGooglePlay = Boolean(googlePlay);
  const hasAppStore = Boolean(appStore);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          {(hasTryDemo || hasLearnMore) && (
            <div>
              {hasTryDemo && <a href={tryDemo}>Try Demo</a>}
              {hasLearnMore && (
                <a
                  href={learnMore}
                  style={{ marginLeft: hasTryDemo ? "50px" : "0" }}
                >
                  Learn More
                </a>
              )}
            </div>
          )}
          {(hasGooglePlay || hasAppStore) && (
            <div className="mt-3">
              {hasGooglePlay && (
                <a href={googlePlay}>
                  <img
                    src="/media/images/googlePlayBadge.svg"
                    alt="Get it on Google Play"
                  />
                </a>
              )}
              {hasAppStore && (
                <a href={appStore}>
                  <img
                    src="/media/images/appstoreBadge.svg"
                    alt="Download on the App Store"
                    style={{ marginLeft: hasGooglePlay ? "50px" : "0" }}
                  />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSection;