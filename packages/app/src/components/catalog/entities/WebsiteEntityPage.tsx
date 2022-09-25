import {EntityDependsOnComponentsCard, EntityDependsOnResourcesCard, EntityLayout} from "@backstage/plugin-catalog";
import {Grid} from "@material-ui/core";
import React from "react";
import {overviewContent} from "../common/OverviewContent";

export const websiteEntityPage = (
    <EntityLayout>
        <EntityLayout.Route path="/" title="Overview">
            {overviewContent}
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
