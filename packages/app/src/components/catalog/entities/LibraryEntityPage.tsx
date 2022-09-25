import {
    EntityDependsOnComponentsCard,
    EntityDependsOnResourcesCard,
    EntityLayout, EntityLinksCard, EntityAboutCard
} from "@backstage/plugin-catalog";
import {Grid} from "@material-ui/core";
import React from "react";
import {EntityGithubActionsContent} from "@backstage/plugin-github-actions";
import {
    EntityGithubInsightsReadmeCard,
    EntityGithubInsightsComplianceCard,
    EntityGithubInsightsReleasesCard,
    EntityGithubInsightsLanguagesCard,
    EntityGithubInsightsContributorsCard
} from '@roadiehq/backstage-plugin-github-insights';
import {
    EntityGithubPullRequestsTable,
    EntityGithubPullRequestsOverviewCard
} from '@roadiehq/backstage-plugin-github-pull-requests';
import {EntityDependabotAlertsCard, EntitySecurityInsightsCard, EntityGithubDependabotContent} from '@roadiehq/backstage-plugin-security-insights';

export const libraryEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            <Grid container spacing={3} direction="row" alignItems="stretch">
                <Grid item sm={12} md={6} lg={8}>
                    <EntityGithubInsightsReadmeCard/>
                </Grid>
                <Grid item sm={12} md={6} lg={4}>
                    <EntityAboutCard/>
                    <br/>
                    <EntityLinksCard/>
                    <br/>
                    <EntityGithubInsightsLanguagesCard/>
                    <EntityGithubInsightsComplianceCard/>
                    <br/>
                    <EntityDependabotAlertsCard/>
                    <EntityGithubPullRequestsOverviewCard/>
                    <EntityGithubInsightsReleasesCard/>
                    <EntityGithubInsightsContributorsCard/>
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/github" title="Github">
            <Grid container spacing={3} direction="row" alignItems="stretch">
                <Grid item sm={12} md={12} lg={12}>
                    <h2>Pull Requests</h2>
                    <EntityGithubPullRequestsTable/>
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                    <h2>Github Actions</h2>
                    <EntityGithubActionsContent/>
                </Grid>
                <Grid item sm={12} md={12} lg={12}>
                    <EntitySecurityInsightsCard/>
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/dependabot" title="Dependabot">
            <EntityGithubDependabotContent />
        </EntityLayout.Route>
    </EntityLayout>
);
