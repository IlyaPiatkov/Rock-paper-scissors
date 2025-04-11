import React from "react"
import { useTranslation, Trans } from "react-i18next"

import { Text, Title, MainContent } from "../../ui"
import { CommonContentTemplate } from "../../features/common/templates/common-content"

export const RulesPage = () => {
  const [t] = useTranslation(["info"])

  return (
    <CommonContentTemplate>
      <MainContent>
        <Title center large>
          {t("info:rules.title")}
        </Title>

        <Text medium>
          <Trans i18nKey="info:rules.text1">
            <b>1</b>
            <b>2</b>
            <b>3</b>
            <b>4</b>
          </Trans>
        </Text>

        <Text medium>{t("info:rules.text2")}</Text>

        <Text medium>{t("info:rules.text3")}</Text>

        <Title as="h2" center big>
          {t("info:rules.title2")}
        </Title>

        <Text medium>{t("info:rules.text4")}</Text>

        <Title as="h2" center big>
          {t("info:rules.title3")}
        </Title>

        <Text medium>
          <Trans i18nKey="info:rules.text5">
            1<b></b>
          </Trans>
        </Text>

        <Text medium>{t("info:rules.text6")}</Text>

        <Text medium>{t("info:rules.text7")}</Text>

        <Text medium>{t("info:rules.text8")}</Text>

        <Text medium>{t("info:rules.text9")}</Text>
      </MainContent>
    </CommonContentTemplate>
  )
}
