var fadeSpeed = 2000;
var featurePauseDelay = 4000;
var features;
var featureIdx = 0;
var lastIdx = 0;

function setupFeatureScroll() {
    features = $("div.Feature");
    features.hide();

    $(features[0]).css("zIndex", 1);
    $(features[0]).fadeIn(fadeSpeed, FeatureFadeNext);
}

function FeatureFadeNext() {
    if (lastIdx != featureIdx)
        $(features[lastIdx]).hide();

    $(this).css("zIndex", 0);
    lastIdx = featureIdx;
    featureIdx++;
    if (featureIdx >= features.length)
        featureIdx = 0;

    $(features[featureIdx]).css("zIndex", 1);
    $(features[featureIdx]).delay(featurePauseDelay).fadeIn(fadeSpeed, FeatureFadeNext);
}

$(window).load(setupFeatureScroll);