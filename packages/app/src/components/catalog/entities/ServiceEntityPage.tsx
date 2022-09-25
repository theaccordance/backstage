import {EntityDependsOnComponentsCard, EntityDependsOnResourcesCard, EntityLayout} from "@backstage/plugin-catalog";
import {overviewContent} from "../common/OverviewContent";
import {Grid} from "@material-ui/core";
import {EntityConsumedApisCard, EntityProvidedApisCard} from "@backstage/plugin-api-docs";
import React from "react";

export const serviceEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            {overviewContent}
        </EntityLayout.Route>

        <EntityLayout.Route path="/api" title="API">
            <Grid container spacing={3} alignItems="stretch">
                <Grid item md={6}>
                    <EntityProvidedApisCard />
                </Grid>
                <Grid item md={6}>
                    <EntityConsumedApisCard />
                </Grid>
            </Grid>
        </EntityLayout.Route>

        <EntityLayout.Route path="/dependencies" title="Dependencies">
            <Grid container spacing={3} alignItems="stretch">
                <Grid item md={6}>
                    <EntityDependsOnComponentsCard variant="gridItem" />
                </Grid>
                <Grid item md={6}>
                    <EntityDependsOnResourcesCard variant="gridItem" />
                </Grid>
            </Grid>
        </EntityLayout.Route>
    </EntityLayout>
);
